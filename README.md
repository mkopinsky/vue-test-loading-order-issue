# vue-test-loading-order-issue

There are two components:
* components/Parent.vue
* components/Child.vue

If I run tests with Parent.test.js first, both tests succeed.
If I change the test order so Child.test.js runs first, Parent.test.js fails with `Error: [vue-test-utils]: find did not return Component, cannot call contains() on empty Wrapper`

To reproduce:
```bash
git clone git@github.com:mkopinsky/vue-test-loading-order-issue.git
npm install
npm run test:passes # This runs Parent.test.js first, and passes
npm run test:fails # This runs Child.test.js first, and fails
```
