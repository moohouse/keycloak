FROM quay.io/keycloak/keycloak:26.6.2 AS builder
USER keycloak
ADD themes/carbon /opt/keycloak/themes/carbon
ENV KC_DB=postgres
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:26.6.2
USER keycloak
COPY --from=builder /opt/keycloak/ /opt/keycloak/
ENV LANG=ko_KR.UTF-8
ENV TZ=Asia/Seoul
