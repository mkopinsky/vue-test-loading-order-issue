# vue-test-loading-order-issue

There are two components:
* LotteryApp.vue
* lottery/LotteryMessages.vue (which is a child component of LotteryApp).

If I run tests with LotteryApp.test.js first, both tests succeed.
If I change the test order so LotteryMessages.test.js runs first, LotteryApp.test.js fails because it can't find by Component.

To reproduce:
```bash
git clone git@github.com:mkopinsky/vue-test-loading-order-issue.git
npm install
npm run test:passes # This runs LotteryApp.test.js first, and passes
npm run test:fails # This runs LotteryMessages.test.js first, and fails
```
