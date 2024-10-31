# Self-service portal Vue UI microfrontend demo application

## Install @registrucentras/rc-ses-vue-components library
1. Make sure you have cloned `rc-ses-vue-components` repository under same parent folder (as described in *self-service-portal-ui-root* repo's README.md);
2. `cd` to `rc-ses-vue-components` and build Vue components library by running:
    ```
    npm i
    npm run build:lib
    ```
3. `cd` back to current repo's root folder and run:
    ```
    npm run rc-ses-components:install
    ```

## Run project in development mode
1. Start `self-service-portal-ui-root` and `self-service-portal-ui` applications in development mode (please refer to README.md of each project);
2. Run current project in development mode:
    ```
    npm i
    npm run dev
    ```
