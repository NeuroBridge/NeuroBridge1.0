# NeuroBridge Website

Rebuilt with React / GatsbyJS / Material UI

## Description

This website is intended to provide information about the NeuroBridge project. The site was built using GatsbyJS and Material UI. The site can be found at neurobridges.org

## Installation

- To run this website locally, clone the repo and install the dependencies (`npm i`)
- When proposing changes, always verify the build process runs without error locally with `npm run build`. Serve the built application on port `localhost:9000` with `gatsby serve`.

## Development

Spin up the development server on [http://localhost:8000](http://localhost:8000) by running `npm start`. 

## Content Management

You will be able to access the content via an interactive GraphQL playground at [http://localhost:8000/__graphql](http://localhost:8000/__graphql) in your browser.
The content for this website lives as YAML files inside the `content`. There are a few content types:
- team members (`src/content/team/team.yaml`)
- participating institutions (`src/content/institutions/institutions.yaml`)
- webinars (`src/content/team/team.yaml`)

## Branding

- Fonts: Libre Franklin
- Colors: 
  - primary: #556270
  - secondary: #DC143C
- MUI components with theme and sx prop customization


## 🎁 Deployment

Build the application for production with `npm run build`. The `public` directory will contain the files bundled with Webpack. This assets in this bundle are what get copied into the release image, so it's a good idea to ensure that the result of build process is what's expected at this stage, before moving on to build Docker images.

#### Deploying to [Sterling](https://wiki.renci.org/index.php?title=Kubernetes_Cloud/Sterling).

Before doing anything, determine the next release version. Throughout this section, we'll assume the next version is `1.0.4`.

1. **Build.** Build a release image with the following command, executed from the project root.
```bash
docker build -t containers.renci.org/neurobridges/neurobridges-website:1.0.4 .
```
> Note: The version tag here, `1.0.4`, must match its occurrences elsewhere in these commands.

2. **Test.** Ensure a container can be spun up from your new image
```bash
docker run --rm -p 80:8080 containers.renci.org/neurobridges/neurobridges-website:1.0.4
```
The container should be running, and we should see the website in your browser at [http://localhost](http://localhost).

3. **Push.** Push the image to RENCI's image registry.
```bash
docker push containers.renci.org/neurobridges/neurobridges-website:1.0.4
```
> Note: If not already authenticated, log in with `docker login containers.renci.org`.

4. **Deploy.** Update the value of `image.tag` in the file `kubernetes/values.yaml` to match the image tag used in the Docker commands above. In our running example, the relevant part of `values.yaml` file would need to look like this.

```yaml
image:
  repository: containers.renci.org/neurobridges/neurobridges-website
  tag: "1.0.4"
```

Deploy the new release with the following command.
```bash
helm upgrade --install neurobridges-website kubernetes -n neurobridges -f kubernetes/prod-values.yaml
```
> Note: The values in `prod-values.yaml` are Sterling-specific values that will overwrite those set in `values.yaml`.