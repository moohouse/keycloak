FROM quay.io/keycloak/keycloak:23.0.3
USER keycloak
ADD dsfr /opt/keycloak/themes/dsfr
ENV LANG=ko_KR.UTF-8
ENV TZ=Asia/Seoul

