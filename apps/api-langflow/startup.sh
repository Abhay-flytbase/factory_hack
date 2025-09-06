 
 #!/bin/bash
# Note: Removed 'set -e' to prevent container exit on import failure
# LangFlow must continue running even if flow import fails

echo "🚀 Starting Verkos LangFlow container..."

# Set default environment variables
export LANGFLOW_URL="${LANGFLOW_URL:-http://localhost:7860}"
export LANGFLOW_FLOWS_PATH="${LANGFLOW_FLOWS_PATH:-/app/flows}"
export LANGFLOW_COMPONENTS_PATH="${LANGFLOW_COMPONENTS_PATH:-/app/custom_components}"
export LANGFLOW_PROJECT_NAME="${LANGFLOW_PROJECT_NAME:-Verkos Flows}"
export LANGFLOW_API_KEY="${LANGFLOW_API_KEY:-}"

echo "📋 Configuration:"
echo "   LangFlow URL: $LANGFLOW_URL"
echo "   Flows Path: $LANGFLOW_FLOWS_PATH"
echo "   Components Path: $LANGFLOW_COMPONENTS_PATH"
echo "   Target Project: $LANGFLOW_PROJECT_NAME"
if [ -n "$LANGFLOW_API_KEY" ]; then
    echo "   API Key: ****${LANGFLOW_API_KEY: -4} (configured)"
else
    echo "   API Key: (not configured - authentication may fail)"
fi

# Start LangFlow in the background
echo "🔄 Starting LangFlow server..."
poetry run langflow run --host 0.0.0.0 --port 7860 &
LANGFLOW_PID=$!

# Check if LangFlow started successfully
if [ $? -ne 0 ]; then
    echo "❌ Failed to start LangFlow server"
    exit 1
fi

if [ -z "$LANGFLOW_PID" ]; then
    echo "❌ LangFlow PID not captured"
    exit 1
fi

# Function to cleanup on exit
cleanup() {
    echo "🛑 Shutting down LangFlow (PID: $LANGFLOW_PID)..."
    kill $LANGFLOW_PID 2>/dev/null || true
    wait $LANGFLOW_PID 2>/dev/null || true
    echo "✅ Shutdown complete"
}

# Set up signal handlers
trap cleanup SIGTERM SIGINT

# Wait a moment for LangFlow to start
sleep 10

# Import flows if the flows directory exists and contains files
if [ -d "$LANGFLOW_FLOWS_PATH" ] && [ "$(ls -A $LANGFLOW_FLOWS_PATH/*.json 2>/dev/null)" ]; then
    echo "📥 Importing flows from $LANGFLOW_FLOWS_PATH..."
    
    # Run import script in a subshell to isolate any errors
    # This ensures import failures don't affect container lifecycle
    (
        python3 /app/import-flows.py
    )
    import_exit_code=$?
    
    if [ $import_exit_code -eq 0 ]; then
        echo "✅ Flow import completed successfully"
    else
        echo "⚠️  Flow import failed with exit code $import_exit_code"
        echo "🔄 LangFlow will continue running without imported flows"
        echo "📋 You can manually import flows through the LangFlow UI"
        echo "🔍 Check the logs above for specific import errors"
        echo "💡 Container will remain healthy and LangFlow accessible"
    fi
else
    echo "ℹ️  No flows found to import in $LANGFLOW_FLOWS_PATH"
fi

echo "🎯 LangFlow is ready at $LANGFLOW_URL"
echo "📊 Custom components loaded from: $LANGFLOW_COMPONENTS_PATH"
echo "📁 Flows imported from: $LANGFLOW_FLOWS_PATH"

# Keep the script running and wait for LangFlow
wait $LANGFLOW_PID