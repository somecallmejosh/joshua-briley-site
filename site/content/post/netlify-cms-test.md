---
title: Checking Out Netlify CMS
date: 2019-03-04T00:14:04.005Z
category: Web Dev
description: >-
  So, I'm just playing around with the Netlify CMS to see what it can and cannot
  do. So far, it seems pretty sweet.
image: /img/computer-user.jpeg
---
First of all, I'm using Netlify CMS with the [Hugo static site generator](https://www.gohugo.io). I've chosen this over Nuxt.js and some of the other more fancy, _cutting edge_ SSG's because I'm familiar with it. It's easy. It's fast. Nuff said.

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

* name: "post" # Used in routes, ie.: /admin/collections/:slug/edit
  label: "Post" # Used in the UI, ie.: "New Post"
  folder: "site/content/post" # The path to the folder where the documents are stored
  create: true # Allow users to create new documents in this collection
  fields: # The fields each document in this collection have
  * {label: "Title", name: "title", widget: "string"}
  * {label: "Publish Date", name: "date", widget: "datetime"}
  * {label: "Intro Blurb", name: "description", widget: "text"}
  * {label: "Image", name: "image", widget: "image", required: false}
  * {label: "Body", name: "body", widget: "markdown"}
* name: "pages"
      label: "Pages"
      files:
        - file: "site/content/_index.md"
          label: "Home Page"
          name: "home"
          fields:
            - {label: Title, name: title, widget: string}
            - {label: Subtitle, name: subtitle, widget: string}
            - {label: Image, name: image, widget: image, required: false}
            - {label: "Blurb", name: blurb, widget: object, fields: \[
                {label: "Heading", name: "heading", widget: string},
                {label: "Text", name: "text", widget: "text"}]}
            - {label: "Intro", name: intro, widget: object, fields: \[
                {label: "Heading", name: "heading", widget: string},
                {label: "Text", name: "text", widget: "text"}]}
            - {label: "Products", name: products, widget: list, fields: \[
                {label: "Image", name: "image", widget: "image"},
                {label: "Text", name: "text", widget: "text"}]}
            - {label: "Values", name: "values", widget: "object", fields: \[
                {label: "Heading", name: "heading", widget: string},
                {label: "Text", name: "text", widget: "text"}]}
  {{< /highlight >}}

Gonna put that in the "_easy to configure page data models_" section.

## What About Other Hugo Shortcodes?

**Maybe a Youtube video shortcode embed?**

{{< youtube w7Ft2ymGmfc >}}

**Yep**. Looks like the Youtube shortcode works just fine. Have to suspect custom shortcodes would work exactly the same. This might simplify some things for the marketing folks who are currently writing `html` to display certain _widgets_ or _components_ within an article or post.

## How About Regular Old Content?

Sed quia **consequuntur magni dolores eos** qui ratione voluptatem sequi nesciunt. Neque tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. _Ut enim ad minima veniam_, quis nostrum [exercitationem ullam corporis suscipit laboriosam](https://www.itsacinch.com), nisi ut aliquid ex ea commodi consequatur? ?

* Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
* Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
* Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam

1. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
2. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
3. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 

> **I'm a block quote.** Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

## What I don't know yet...

* How easy would it be to build something flexible, like Microsites?
  * Can I reposition content on a page from within the admin?
  * Can I add/embed components to a page?
* What about embedding form elements and such?
* What about adding widgets/components on the fly?
* Associating content or content types, is that a thing?
* What about drafts? Or, author types?

## Interesting Stuff

* Renaming a route can only be done in code, not from within the admin section? Seems strange.
