from elevenlabs import ElevenLabs

client = ElevenLabs(
    api_key="YOUR_API_KEY",
)
client.speech_to_text.convert(
    model_id="model_id",
)
