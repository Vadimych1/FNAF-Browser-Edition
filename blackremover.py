from PIL import Image
from rembg import remove


while True:
    impath = input("Image folder >")
    img = Image.open(impath)
    out = remove(img)
    out.save(impath.split("/")[len(impath.split("/"))-1]+".png")