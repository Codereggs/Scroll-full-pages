# Wholepagescroll

Wholepagescroll is a React library to scroll all visible windows sections one by one.

You can scroll it vertical or horizontal. It can be a Slider or a simple page, but with complete scrolling from section to section.

## Installation

You can use yarn to install wholepagescroll:

```bash
yarn add wholepagescroll
```

Or can use also npm:

```bash
npm install wholepagescroll
```

## Usage

The library have 2 principal and unique components for now.

First, there is MainScroll, which is the principal and base component. It's behavior is similar to a copy of the body inside the navigator.

```javascript
import { MainScroll } from "wholepagescroll";

export const ExampleComponent = () => {
  return (
    <>
      <MainScroll></MainScroll> //Inside the body tag, similar to it.
    </>
  );
};
```

The second is ChildScroll, it's behavior is similar a definitive section, each sections will have 100vh of height, so you can put all your page's content inside it, remember not overflow the section.

The **first** ChildScroll component should have always the "active" prop, it's to indicate the first child scroll. **The others will not have it.**

**👀 _Remember that, if you ignore this your app will crash_ 👀**

```javascript
import { MainScroll, ChildScroll } from "wholepagescroll";

export const ExampleComponent = () => {
  return (
    <>
      <MainScroll>
        <ChildScroll active></ChildScroll> //Your first section
        <ChildScroll></ChildScroll> //Your second section
        <ChildScroll></ChildScroll>
      </MainScroll>
    </>
  );
};
```

You can explain to ChildScroll where you want to scroll, so you can put a direction prop to indicates where, if horizontal or vertical.

Use it from the second ChildScroll component because the first should have vertical by default.

```javascript
import { MainScroll, ChildScroll } from "wholepagescroll";

export const ExampleComponent = () => {
  return (
    <>
      <MainScroll>
        <ChildScroll active>//Your divs and all content here..</ChildScroll>
        <ChildScroll direction="horizontal">
          //Your divs and all content here..
        </ChildScroll>
        <ChildScroll direction="vertical">
          //Your divs and all content here..
        </ChildScroll>
      </MainScroll>
    </>
  );
};
```

**ADVICE** Don't use style inside the ChildScroll or MainScroll component, because it uses the inline style to make the effect. So, the recommendation is use new div or section inside ChildScroll with width 100% and height 100%.

## Live Example

<center><video src="assets/example.webm" type="video/webm" width="320" height="240" controls >
</video></center>

## License

[MIT](https://choosealicense.com/licenses/mit/)

<center><h2>ENJOY</h2></center>

<div style="display:flex; flex-direction:column; align-items:center; justify-content:center">

<h2>Made By</h2>

<span>Codereggs with</span>
<img width="15" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a4792595-9766-49a4-b00f-c6c2b9662c16/dcq5pnb-849537f2-40a3-47e2-81cf-19b4b6678096.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0NzkyNTk1LTk3NjYtNDlhNC1iMDBmLWM2YzJiOTY2MmMxNlwvZGNxNXBuYi04NDk1MzdmMi00MGEzLTQ3ZTItODFjZi0xOWI0YjY2NzgwOTYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dxlfWUx2yyMqFWvTOg7g4P062O5fpo6ZqhonUbd1UKg" alt="animated heart">

<img src="https://img.shields.io/badge/%F0%9F%92%8C%20Make%20a-donation-red?style=for-the-badge" alt="donations badge">

<a href="https://paypal.me/mrgarsan?country.x=AR&locale.x=es_XC" alt="paypal"><h3>Paypal</h3></a>

<h3>Metamask</h3>
<p>0xF222328a369F073441945b695b49B4bf390bC057</p>

</div>
