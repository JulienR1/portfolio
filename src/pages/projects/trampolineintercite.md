---
title: "Trampoline Intercité"
website: "https://trampolineintercite.com"
repo: "https://github.com/JulienR1/trampolineintercite.com"
layout: "/src/layouts/Project.astro"
---

## Original version

My local sports organization needed an updated website and I wanted to learn how to develop for the web.
This project is a learning experience that grew into a published site.

The original version is currently hosted on GoDaddy as static handwritten HTML, CSS and JS files with a very little bit or PHP sprinkled around.
Updates are slow and error-prone, and the loading times are not the best.

## Modern version

This (on going) project is **full rewrite** of the website using modern technologies such as [Astro](https://astro.build/), [React](https://react.dev/) and [Go](https://go.dev/).
It is driven by my continuous goal to **automate repetitive processes** and **reduce the amount of pain points** when updating the original site.

The user facing side is a **fully static archive** mimicking the classic vanilla website currently in use and relying on **web standards**.
The admin side, which is allowed to be slower, uses a heavier stack but is much more powerful.
This separation allows for a good experience for every user.

In time, the site will be editable by any authorized admin and will not require my intervention, all _while minimizing hosting and operating costs_.

### Roadmap

- [ ] Reproduce original version
  - Use Astro;
  - Generate pages based on static values;
  - Use HTML for interactivity when available before relying on JS.
- [ ] CI/CD
  - Setup the project in the cloud.
- [ ] Link to backend
  - Offer API based on [OpenAPI](https://www.openapis.org/) standards;
  - Replace static values in website with values from API.
- [ ] Create CLI tool
  - Offer some basic functionalities to admins (eg.: create a new user);
  - Automate complicated processes to reduce errors.
- [ ] Admin portal
  - Create a more user-friendly UI to edit the website for any administrator.
