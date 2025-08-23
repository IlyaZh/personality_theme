# Ilia Zhitenev Ghost Theme

Custom Ghost theme that provides a static homepage with resume and moves the blog to `/blog/` route.

## Features

- **Static Homepage** - Resume/portfolio page at `/`
- **Blog at /blog** - All blog posts accessible via `/blog/`
- **Individual Posts** - Posts remain at root level `/{post-slug}/`
- **Responsive Design** - Built with DaisyUI and Tailwind CSS
- **Dark/Light Theme** - Theme switching with localStorage persistence
- **SEO Optimized** - Proper meta tags and Ghost SEO features

## URL Structure

- `/` - Static homepage (resume/portfolio)
- `/blog/` - Blog posts listing
- `/{post-slug}/` - Individual blog posts
- `/tag/{tag-slug}/` - Tag pages
- `/author/{author-slug}/` - Author pages

## Installation

1. **Zip the theme:**
   ```bash
   zip -r ilia-zhitenev-theme.zip ghost-theme/
   ```

2. **Upload to Ghost:**
   - Go to Ghost Admin → Design → Themes
   - Click "Upload theme" and select the zip file
   - Activate the theme

3. **Configure routes (IMPORTANT):**
   - Go to Ghost Admin → Settings → Labs
   - Download current routes.yaml
   - Replace with the routes.yaml from this theme
   - Upload the new routes.yaml file
   - Restart Ghost

## Required Ghost Configuration

### Routes Configuration
The theme requires a custom `routes.yaml` file to work properly. Make sure to upload the included `routes.yaml` file in Ghost Admin → Settings → Labs.

### Tags Setup
For proper category filtering, create these tags in Ghost Admin:
- `blog` - Technical articles and insights
- `growth` - Career development posts
- `projects` - Project showcases and tutorials
- `thoughts` - Personal reflections and opinions

### Author Profile
Update the author profile with:
- Profile image
- Bio description
- Website and social media links

## Customization

### Site Information
Update in Ghost Admin → Settings → General:
- Site title
- Site description
- Site icon (favicon)
- Site logo

### Colors and Styling
The theme uses DaisyUI themes. To change the color scheme:
1. Edit the `data-theme` attribute in the HTML files
2. Available themes: light, dark, cupcake, bumblebee, emerald, corporate, etc.

### Contact Information
Update contact details in:
- `index.hbs` (homepage)
- `partials/footer.hbs` (if created)

### Resume PDF
Replace `assets/resume-ilia-zhitenev.pdf` with your actual resume file.

### Profile Images
Replace images in `assets/images/` folder:
- `profile_1.jpg`
- `profile_2.jpg` 
- `profile_3.jpg` (used on homepage)

## Files Structure

```
ghost-theme/
├── package.json          # Theme configuration
├── routes.yaml           # Custom routing (REQUIRED)
├── index.hbs            # Static homepage template
├── home.hbs             # Blog listing template (/blog/)
├── post.hbs             # Individual post template
├── assets/
│   ├── favicon.svg      # Site favicon
│   ├── resume-ilia-zhitenev.pdf
│   └── images/
│       ├── profile_1.jpg
│       ├── profile_2.jpg
│       └── profile_3.jpg
└── README.md            # This file
```

## Development

### Local Development
1. Install Ghost locally
2. Place theme in `content/themes/ilia-zhitenev-theme/`
3. Upload routes.yaml via Admin
4. Activate theme in Ghost Admin

### Building for Production
1. Test all pages work correctly
2. Verify routes.yaml is properly configured
3. Check responsive design on all devices
4. Test theme switching functionality

## Support

For issues or questions about this theme:
- Email: ilia.zhitenev@gmail.com
- GitHub: https://github.com/IlyaZh

## License

MIT License - Feel free to modify and use for your own projects.

---

**Made with ❤️ for Ghost 6+ and modern web standards**
