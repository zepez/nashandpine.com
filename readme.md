> Please note: `nashandpine.com` is defunct. A mirror can be found at [nashandpine.zepez.dev](https://nashandpine.zepez.dev)


# [NashAndPine.com](https://nashandpine.com)

Marketing site for Nash & Pine

---

## ‼️ Tech

Built with:

[NextJS](https://nextjs.org) <br />
[Tailwind CSS](https://tailwindcss.com) <br />
[Shuffle Editor](https://shuffle.dev) <br />

---

## ⌗ ENV

NAP_CONTACT_WEBHOOK — Ex: https://service.domain.tld/slug

This is the webhook used to pass the data from the contact form.

---

## ❓ FAQ

Q: Isn't NextJS completely overkill for this project?

A: Yes. NextJS is used because that's what I'm familiar with and I wanted to get this done quickly. I need to be able to extend this application with reactivity in case it's required later and I need the SEO that NextJS allows. Ergo NextJS was used.

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

Registry name: nashandpine

