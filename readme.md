
# nashandpine.com

Marketing site for Nash & Pine

---

## ⁉️ Tech

Built with:

[Tailwind CSS](https://tailwindcss.com) <br />
[Shuffle Editor](https://shuffle.dev) <br />

---

## 📦 Building / Running

To run the development server, run:

`npm run dev`

To build, use: 

`npm run build` 

---

## 🐳 Docker

There is a dockerfile provided with the project. To build a docker image, simply use: 

`docker build .`

To run the docker image that you just created, run:

`docker run -p 3000:3000 [imageid]`

---

## 🌊 Digital Ocean

Here's some notable Digital Ocean CLI commands: 

#### Docker
 - `doctl registry login`
 - `docker tag [imageid] registry.digitalocean.com/nap/nashandpine:version`
 - `docker push registry.digitalocean.com/nap/nashandpine:version`

