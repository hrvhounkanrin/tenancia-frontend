<template>
   <portal-target name="payment"/>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faClock,
        faQuestionCircle,
        faArrowRight
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faClock,
        faQuestionCircle,
        faArrowRight
    );

    export default {
        name: 'PaymentCardInterface',
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>
