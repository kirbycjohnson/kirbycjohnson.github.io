# Kirby Johnson · Engineering Portfolio

A fast, static portfolio site built with plain HTML, CSS, and JavaScript. No build step, no framework, and it hosts free on GitHub Pages.

**All the content lives in one file: `js/data.js`.** You should almost never need to touch the HTML, CSS, or `app.js`.

---

## Folder structure

```
portfolio/
├── index.html                 The whole site: sidebar, Projects, Skills
├── project.html               Redirects old project links to the home page
├── 404.html                   "Page not found" page
├── favicon.svg                Browser tab icon (KJ monogram)
├── .nojekyll                  Tells GitHub Pages to serve files as-is
├── css/
│   └── styles.css             All styling. Colors and fonts are at the top.
├── js/
│   ├── data.js                ← YOUR CONTENT: name, links, intro, projects, skills
│   └── app.js                 Builds the pages from data.js (no need to edit)
├── assets/
│   └── resume/
│       └── Kirby_Johnson_Resume.pdf
└── images/
    ├── placeholder.svg        Shown automatically if an image path is wrong
    ├── icons/                 Skill icons (one file per skill)
    ├── profile/
    │   └── headshot-placeholder.svg
    └── projects/
        ├── lvb-device/
        ├── msk-joint-pain-india/
        ├── applied-medical-surgical-simulation/
        ├── gaitway/
        ├── bionic-hand/
        └── pulse-oximeter/
```

Each project has its own image folder named after its `id` in `data.js`.

---

## Part 1: Put the site on GitHub Pages

You only do this once. It takes about 10 minutes.

1. **Create a GitHub account** at [github.com](https://github.com) if you don't have one.
2. **Create a repository.** Click **+** (top right) → **New repository**.
   - For the cleanest address, name it **`<your-username>.github.io`** (for example `kirbyjohnson.github.io`). The site will live at `https://<your-username>.github.io`.
   - Any other name (for example `portfolio`) also works. The site will live at `https://<your-username>.github.io/portfolio/`.
   - Set it to **Public**, and leave "Add a README" unchecked. Click **Create repository**.
3. **Upload the files.** On the new repository page, click **uploading an existing file**. Open the `portfolio` folder on your computer, select **everything inside it** (not the folder itself), and drag it into the browser. Click **Commit changes**.
   - Make sure `index.html` ends up at the top level of the repository, not inside a `portfolio/` subfolder.
   - The `.nojekyll` file is hidden on Mac and Windows. It's optional, so don't worry if it doesn't upload.
4. **Turn on Pages.** In the repository, go to **Settings** → **Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, then click **Save**.
5. **Wait 1–2 minutes**, then refresh the Pages settings page. Your live link appears at the top ("Your site is live at …"). Open it and click through every project.
6. **Add the link** to your LinkedIn, resume header, and email signature.

> To preview on your own computer before uploading, open `index.html` in a browser. Everything works locally, including the project pages.

---

## Part 2: Update the site

### How to edit a file on GitHub (no software needed)

1. Open your repository on github.com and click the file (for example `js/data.js`).
2. Click the **pencil icon** (Edit this file).
3. Make your change, then click **Commit changes**.
4. The live site updates in about a minute. Hard-refresh (Ctrl+Shift+R or Cmd+Shift+R) if you still see the old version.

**Tip:** In `data.js`, keep every piece of text inside quotes, and keep the comma at the end of each item. If the page goes blank after an edit, a missing quote or comma is almost always the cause. Undo the last change and try again.

### Change your name, email, LinkedIn, or the sidebar

Open `js/data.js`. The `site` section holds your name, title, email, LinkedIn, and location. The `about` section holds the short statement under your name and your education. To show a round photo above your name, set `photo:` to your image path, for example `"images/profile/kirby-johnson-headshot.jpg"`. Leave it as `""` to hide the photo.

### Replace your resume

Name your new PDF exactly **`Kirby_Johnson_Resume.pdf`**, then upload it into `assets/resume/` on GitHub (**Add file** → **Upload files**, and it replaces the old one). No code changes needed.

If you'd rather use a different file name, change the `resume:` line in the `site` section of `data.js` to match.

### Replace a placeholder image

Every placeholder says **"REPLACE WITH: filename.jpg"** in its bottom corner, so you know exactly which slot it fills.

1. **Prepare the photo.** Crop it, then export it as a **JPG about 1600 px wide** (cover images look best in landscape, roughly 3:2). Aim for under 300 KB. [Squoosh](https://squoosh.app) does this for free in the browser: drop in the image, set width to 1600, choose MozJPEG at quality 75–80.
2. **Name it descriptively** with lowercase letters and dashes, like `sensor-housing-cad.jpg`. Avoid spaces.
3. **Upload it** into that project's folder, for example `images/projects/gaitway/`.
4. **Point to it in `data.js`.** Find the line with the old placeholder path and change it to the new file:

   ```js
   // before
   src: "images/projects/gaitway/sensor-housing-cad.svg",
   // after
   src: "images/projects/gaitway/sensor-housing-cad.jpg",
   ```

5. **Update the `alt` text** to describe what the image shows (screen readers and search engines use it).
6. Once the real image is in, you can delete the old `.svg` placeholder.

If a path has a typo, the site shows a gray "image not found" tile instead of breaking, so you'll spot it right away.

**Your headshot:** upload a square photo (about 600 × 600 px) to `images/profile/` and set `photo:` in the `about` section.

**Cover framing:** if the important part of a cover photo is cut off, add a `position` line to its `cover`, like `position: "center 30%"`. The first number moves left/right, the second moves up/down.

### Add a photo to a project's gallery

In the project's `gallery` list, copy one line and edit it. The cover image shows large, and the first three gallery images show as thumbnails beside it:

```js
gallery: [
  { src: "images/projects/gaitway/pcb-and-electronics.jpg", alt: "Assembled PCB with ESP32 and IMU headers", caption: "PCB and electronics" },
  { src: "images/projects/gaitway/gait-testing-hallway.jpg", alt: "Team member walking while wearing the device", caption: "Walking trials" },
],
```

Visitors can click any image to enlarge it and use the arrow keys to flip through the rest.

**Videos:** you can add a short clip (under about 10 MB, ideally an `.mp4`) to a gallery. Give it a `video:` path plus a still image as `src:` that shows before it plays:

```js
{ video: "images/projects/bionic-hand/grape-picking-challenge.mp4", src: "images/projects/bionic-hand/grape-picking-challenge-poster.jpg", alt: "...", caption: "..." },
```

Videos from an iPhone are often `.mov` files that some browsers can't play, so send them to Claude to convert, or convert them to MP4 first.

### Edit a project's text

Each project in `data.js` has these fields:

| Field | Where it shows |
|---|---|
| `title`, `category`, `summary` | Project card and top of the project page |
| `role` | Kept for your notes; not shown on the page |
| `org`, `dates`, `team` | Info row on the project page (leave `""` to hide one) |
| `skills` | Tags on the card (first 6) and the full list on the project page |
| `cover` | The large image for the project |
| `highlights` | Big numbers above the Skills list (optional) |
| `overview`, `process` | Kept for your own notes; not shown on the page |
| `contributions` | **"My Contributions"** bullets: your individual work |
| `teamOutcomes` | Kept for your notes; not shown on the page |
| `outcome` | **"Results"** bullets (rename the heading with `resultsLabel` at the top of `projects`) |
| `note` | Kept for your notes; not shown on the page |
| `gallery` | Thumbnails beside the cover (first three) |
| `links` | Buttons under the summary, e.g. `{ label: "Final report (PDF)", href: "assets/docs/My_Report.pdf" }`. Upload the PDF to `assets/docs/` first. |
| `status: "in-progress"` | Adds an "In progress" label |
| `hidden: true` | Removes the project from the site without deleting it |

Put only your own work under `contributions`, since that list is what tells a recruiter what you personally did.

### Add a new project

1. In `data.js`, copy an entire project block, from its `{` to its closing `},`.
2. Paste it where you want it to appear in the list.
3. Give it a new, unique `id` (lowercase, dashes, e.g. `"peg-tube-securement"`). You can link straight to it with `#peg-tube-securement` at the end of your site address.
4. Create a matching image folder: `images/projects/peg-tube-securement/`.
5. Fill in the text and image paths.

### Remove or reorder projects

- **Reorder:** move whole project blocks up or down in the list. Numbering (01, 02, …) updates automatically.
- **Hide temporarily:** set `hidden: true`.
- **Delete:** remove the whole block, and optionally its image folder.

Put your strongest project first.

### Add a skill or skill category

In the `skills` section of `data.js`, each skill is one line with a name and an icon:

```js
{ name: "SolidWorks", icon: "solidworks" },
```

The `icon` is a file name from `images/icons/` without the `.svg`. To add a skill:

1. Copy a line and change the name.
2. For the icon, either reuse one already in `images/icons/`, use `icon: "generic"` (a simple check-mark icon), or add your own. To add your own, download the logo as an SVG or a square PNG (for example, search "SolidWorks logo SVG"), name it with dashes like `ansys.svg`, upload it to `images/icons/`, and set `icon: "ansys"`. For a PNG, include the extension: `icon: "ansys.png"`.

To add a category, copy a whole `{ category: ..., items: [...] },` block.

### Change the accent color or fonts

The theme is white, black, and navy. To change the navy, edit `--navy` at the top of `css/styles.css`. Fonts are IBM Plex Sans and IBM Plex Mono, loaded from Google Fonts in the `<head>` of each HTML file.

---

## Notes

- **Real photos already included** (from your work sample): the Applied Medical camera fixture, the bionic hand, and the pulse oximeter poster. Everything else is a labeled placeholder.
- **Confidential work:** the LVB and India projects are industry-sponsored. Check with CBID and your sponsor before posting CAD, photos, or details. The LVB page already includes a note that some details are withheld.
- **Patient photos:** for field research images, only use photos you have consent to share, and avoid identifiable patients.
- **Custom domain (optional):** buy a domain (e.g. `kirbyjohnson.com`), then in **Settings → Pages → Custom domain** enter it and follow GitHub's DNS instructions.
