---
title: 'Netlify CMS '
date: 2019-03-04T00:14:04.005Z
description: >-
  So, I'm just playing around with the Netlify CMS to see what it can and cannot
  do. So far, it seems pretty sweet. Let me test out a couple things below.
image: ''
---
## Can I Write Code Here?

{{< highlight js >}}
;(function () {
	const stickyHeader = 'sticky-header';
	
	const fixStickyHeader = _ => {
		if(window.scrollY > 0) {
			global.body.classList.add(stickyHeader);
		} else {
			global.body.classList.remove(stickyHeader);
		}
	}
	
	window.addEventListener('scroll', fixStickyHeader);
})()
{{< /highlight >}}

I'll take that as a solid **yes**!

### How easy is it to customize page data?

A little `yml` in the admin section goes a long way.

{{< highlight js >}}
backend:
  name: git-gateway

media_folder: "site/static/img" # Folder where user uploaded files should go
public_folder: "img"

collections: # A list of collections the CMS should be able to edit
  - name: "post" # Used in routes, ie.: /admin/collections/:slug/edit
    label: "Post" # Used in the UI, ie.: "New Post"
    folder: "site/content/post" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    fields: # The fields each document in this collection have
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Intro Blurb", name: "description", widget: "text"}
      - {label: "Image", name: "image", widget: "image", required: false}
      - {label: "Body", name: "body", widget: "markdown"}
  - name: "pages"
    label: "Pages"
    files:
      - file: "site/content/_index.md"
        label: "Home Page"
        name: "home"
        fields:
          - {label: Title, name: title, widget: string}
          - {label: Subtitle, name: subtitle, widget: string}
          - {label: Image, name: image, widget: image, required: false}
          - {label: "Blurb", name: blurb, widget: object, fields: [
              {label: "Heading", name: "heading", widget: string},
              {label: "Text", name: "text", widget: "text"}]}
          - {label: "Intro", name: intro, widget: object, fields: [
              {label: "Heading", name: "heading", widget: string},
              {label: "Text", name: "text", widget: "text"}]}
          - {label: "Products", name: products, widget: list, fields: [
              {label: "Image", name: "image", widget: "image"},
              {label: "Text", name: "text", widget: "text"}]}
          - {label: "Values", name: "values", widget: "object", fields: [
              {label: "Heading", name: "heading", widget: string},
              {label: "Text", name: "text", widget: "text"}]}
{{< /highlight >}}

Gonna put that in the "*easy to configure page data models*" section.

## What About Other Hugo Shortcodes?

**Maybe a Youtube video shortcode embed?**

{{< youtube w7Ft2ymGmfc >}}

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

**Or, how about a Gist?**

{{< gist spf13 7896402 "img.html" >}}

## How About Regular Old Content?

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia **consequuntur magni dolores eos** qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. _Ut enim ad minima veniam_, quis nostrum [exercitationem ullam corporis suscipit laboriosam](https://www.itsacinch.com), nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

* Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
* Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
* Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam

1. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
2. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
3. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 

> Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

## What I don't know yet...
- How easy would it be to build something flexible, like Microsites?
  - Or, is it even possible?
- What about embedding form elements and such?
- What about adding widgets/components on the fly?
