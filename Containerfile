FROM quay.io/keycloak/keycloak:23.0.3
USER keycloak
ADD keywind/out/keywind.jar /opt/keycloak/themes/
ENV LANG=ko_KR.UTF-8
ENV TZ=Asia/Seoul

