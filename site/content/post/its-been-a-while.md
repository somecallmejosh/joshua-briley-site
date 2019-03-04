---
title: 'Netlify CMS '
date: 2019-03-04T00:14:04.005Z
description: >-
  So, I'm just playing around with the Netlify CMS to see what it can and cannot
  do. So far, it seems pretty sweet. Let me test out a couple things below.
image: ''
---
```
Can I Write Code Here?
```

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
