<#ftl output_format="plainText">
<#assign requiredActionsText><#if requiredActions??><#list requiredActions><#items as reqActionItem>${msg("requiredAction.${reqActionItem}")}<#sep>, </#items></#list><#else></#if></#assign>

<#if link?ends_with("/welcome")>
  ${kcSanitize(msg("accountCreatedBody",link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration)))}
<#else>
  ${kcSanitize(msg("executeActionsBody",link, linkExpiration, realmName, requiredActionsText, linkExpirationFormatter(linkExpiration)))}
</#if>
