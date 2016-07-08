Hey Wanda!

Instead of making changes to your code, I decided to abstract the specific
feature/interaction you wanted to achieve and isolated that code in
separate files.

The code is focused on the functionality of cycling numerous items will through
the film strips. When you get to the last item, it'll cycle back to the first.

![Film Strip Cycle](https://s3.amazonaws.com/bitmakerhq/resources/front-end-development/film-strip-cycle.gif)

In the example above, I am only displaying 10 items at a time on the page. However,
I have 16 items to cycle through. So once we get to the 16th item, it starts back
again at the 1st item.

---
#### What I've done

I've created 3 new files:
1. `example.html`
2. `example.css`
3. `example.js`

The main file you want to focus on is `example.js`. I've left comments throughout
the document, so it should help guide you with understanding the logic. There are
a few comments in the `example.html` file as well.

In this example, I'm inserting text. You'll be able to do the same with your images.
