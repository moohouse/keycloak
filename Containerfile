FROM quay.io/keycloak/keycloak:26.6.2
USER keycloak
ADD themes/carbon /opt/keycloak/themes/carbon
ENV LANG=ko_KR.UTF-8
ENV TZ=Asia/Seoul
