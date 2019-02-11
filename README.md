# Simple Portfolio Template

Here's a [Preview](https://xanderjakeq.github.io/portfolioTemplate/)

## Adding Projects

Copy and paste project div

    <div>
        <img src="./images/kenLog.png" alt="kenLog screenshot">
        <h2>KenLog</h2>
        <p>A place for your thoughts. A journaling app.</p>
    </div>

into 'portfolio' div

Then set `.portfolio-height(num)` in index.less with `num` as the number of projects. It should be in the portfolio block inside `index.less`.

Depending on the content inside your project div, you might need to edit `@project-height` variables at the top of index.less file.

### Notes
- You need to install [less-watch-compiler](https://www.npmjs.com/package/less-watch-compiler)
- Run `less-watch-compiler less css index.less` to apply changes made in index.less
- FeatherIcons are used. [Learn More](https://github.com/feathericons/feather#feather)
