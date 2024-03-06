FROM quay.io/keycloak/keycloak:24.0.1
USER keycloak
ADD carbon /opt/keycloak/themes/carbon
ADD keywind /opt/keycloak/themes/keywind
ENV LANG=ko_KR.UTF-8
ENV TZ=Asia/Seoul

