"""import base64
import pyaudio


f = open(r"D:\Project Songs\Thanni Can.mp3","rb")
print(f.read())

p = pyaudio.PyAudio()
stream = p.open(format=pyaudio.paInt16,channels=2,rate=44100,output=True)
stream.write(song_data)
stream.stop_stream()
stream.close()
p.terminate()
"""





import simpleaudio as sa
from pydub import AudioSegment

# Convert MP3 to WAV
song = AudioSegment.from_mp3(r"D:\Project Songs\Thanni Can.mp3")
song.export("temp.wav", format="wav")

# Play WAV
wave_obj = sa.WaveObject.from_wave_file("temp.wav")
play_obj = wave_obj.play()
play_obj.wait_done()
