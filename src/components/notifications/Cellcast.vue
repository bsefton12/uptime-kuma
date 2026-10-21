<template>
    <div class="mb-3">
        <label for="cellcast-api-key" class="form-label">{{ $t("API Key") }}</label>
        <i18n-t tag="div" class="form-text" keypath="cellcastApiKeyHelp">
            <a href="https://app.cellcast.com/auth/" target="_blank">{{ $t("here") }}</a>
        </i18n-t>
        <HiddenInput
            id="cellcast-api-key"
            v-model="$parent.notification.cellcastApiKey"
            :required="true"
            autocomplete="new-password"
        ></HiddenInput>
    </div>
    <div class="mb-3">
        <label for="cellcast-recipients" class="form-label">{{ $t("Recipient Number") }}</label>
        <input
            id="cellcast-recipients"
            v-model="$parent.notification.cellcastRecipients"
            type="text"
            class="form-control"
            placeholder="+61400000000"
            required
        />
        <div class="form-text">{{ $t("cellcastRecipientsHelp") }}</div>
    </div>
    <div class="mb-3">
        <label for="cellcast-sender" class="form-label">{{ $t("From Name/Number") }}</label>
        <input
            id="cellcast-sender"
            v-model="$parent.notification.cellcastSender"
            type="text"
            maxlength="16"
            class="form-control"
        />
        <div class="form-text">{{ $t("cellcastSenderHelp") }}</div>
    </div>
    <div class="mb-3">
        <i18n-t tag="div" keypath="checkPriceAt" class="form-text">
            <template #service>Cellcast</template>
            <template #url>
                <a href="https://www.cellcast.com/au/pricing" target="_blank">https://www.cellcast.com/au/pricing</a>
            </template>
        </i18n-t>
    </div>
</template>
<script>
import HiddenInput from "../HiddenInput.vue";

export default {
    components: {
        HiddenInput,
    },
};
</script>
