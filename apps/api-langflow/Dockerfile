# Use the LangFlow base image
FROM langflowai/langflow:1.4.2
USER root

# Set working directory
WORKDIR /app

# Install Poetry globally using pip
RUN pip install poetry

# Copy root pyproject.toml and poetry.lock first (for better Docker layer caching)
COPY ./pyproject.toml ./poetry.lock /app/

# Install only main dependencies (excluding dev dependencies and the monorepo package itself)
RUN poetry install --no-interaction --only=main --no-root

# Create directories for components and flows
RUN mkdir -p /app/custom_components /app/flows

# Copy custom components
COPY apps/api-langflow/app/custom_components/ /app/custom_components/

# Copy flows for auto-import
COPY apps/api-langflow/app/custom_flows/ /app/flows/

# Copy import scripts
# COPY apps/api-langflow/import-flows.py /app/import-flows.py
# COPY apps/api-langflow/startup.sh /app/startup.sh

# Make scripts executable
RUN chmod +x /app/startup.sh /app/import-flows.py

# Set environment variables
ENV LANGFLOW_COMPONENTS_PATH=/app/custom_components
ENV LANGFLOW_FLOWS_PATH=/app/flows

# Expose Langflow port
EXPOSE 7860

# Use startup script for flow auto-import
CMD ["/app/startup.sh"]
