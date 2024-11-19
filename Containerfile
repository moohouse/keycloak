FROM quay.io/keycloak/keycloak:26.0.5
USER keycloak
ADD keywind /opt/keycloak/themes/keywind
ENV LANG=ko_KR.UTF-8
ENV TZ=Asia/Seoul

