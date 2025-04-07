import os
from pydub import AudioSegment

# Path to the 'audio' subdirectory
audio_dir = "audio"

# Loop through each file in the directory
for root, _, files in os.walk(audio_dir):
    for file in files:
        if file.lower().endswith(".m4a"):
            m4a_path = os.path.join(root, file)
            wav_filename = os.path.splitext(file)[0] + ".wav"
            wav_path = os.path.join(root, wav_filename)

            try:
                # Load and convert
                audio = AudioSegment.from_file(m4a_path, format="m4a")
                audio.export(wav_path, format="wav")
                print(f"Converted: {m4a_path} -> {wav_path}")

                # Remove the original .m4a file
                os.remove(m4a_path)
                print(f"Deleted: {m4a_path}")

            except Exception as e:
                print(f"Error processing {m4a_path}: {e}")
