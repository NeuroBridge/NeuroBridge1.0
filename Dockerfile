FROM gatsbyjs/gatsby:onbuild as build

FROM bitnami/nginx:latest
COPY --from=build /pub /opt/bitnami/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
