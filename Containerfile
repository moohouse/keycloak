FROM quay.io/keycloak/keycloak:22.0.5
USER keycloak
ADD keywind/out/keywind.jar /opt/keycloak/themes/
ENV LANG=ko_KR.UTF-8
ENV TZ=Asia/Seoul
