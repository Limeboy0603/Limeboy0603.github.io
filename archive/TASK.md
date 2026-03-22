# Objective

Your task is to redesign my personal page. For your reference, my old personal webpage in HTML and CSS is provided at `ARCHIVE.html`

# Requirements

**Please note that you are currently in a dev-container. Check the container configuration in `.devcontainer`.**

- Website content:
    - The website must contain the projects listed in `ARCHIVE.html`. 
        - You must include the title, the technology stack used, and the description.
        - You must also keep the hyperlinks to the URL originally in `ARCHIVE.html`, you may redesign on how website visitors are redirected.
    - The website must contain a link to my GitHub profile. The design of this part should be easily expandible for me to add links to other profiles (such as Twitter/Linkedin), for now simply include the GitHub profile link.
- The website must support the following browser with minimum version number:
    - Firefox 148.0.2 (PC)
    - Safari 18
    - Edge 146.0.3856.59
    - Google Chrome 146.0.7680.80 (PC and Mobile)
- Design:
    - You must use a modern layout for the website.
    - You must use a color scheme in dark color.
    - You are encouraged to add CSS animations.
    - You may add logos/images to the webpage BUT the reference to these logos/images should be placeholders. List out the logos/images you need in `IMAGES.md` as you add in these items. **Do NOT attempt to download any images on your own.**
- Tech stack:
    - You must use bun as the node.js runtime. Please note that bun is already installed.
    - You must use Next.js as the frontend.
    - The code must be written in Typescript.
    - You may use Vite to run a testing server.
- Deployment:
    - The website is targed to run on `https://limeboy0603.github.io`, you should include the configurations required for deploying the website on github pages.
    - **You must NOT deploy the website on the spot.** No git keys are provided and therefore you will not be able to create a repository on GitHub either.
- You must add a `README.md` in the working directory.
    - The file should include steps for running locally.
    - The `README.md` file must not include any emojis.
    - The `README.md` file must disclose that the repository is vibe-coded. Include your model name in `README.md`.
- Security:
    - **Your code MUST follow security standards.**
    - After you have completed coding, you should scan for vulerabilities using `trivy`, which is already installed. The command for this is `trivy fs .`
    - You should report your findings in a new file `SECURITY.md`, **do not attempt to fix them on your own**.