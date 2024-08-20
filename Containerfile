FROM quay.io/keycloak/keycloak:25.0.3
USER keycloak
ADD keywind /opt/keycloak/themes/keywind
ENV LANG=ko_KR.UTF-8
ENV TZ=Asia/Seoul

