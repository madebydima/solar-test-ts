<template>
    <div class="loader">
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle
                fill="none"
                stroke-width="7"
                stroke-linecap="round"
                cx="33"
                cy="33"
                r="28"
                stroke="#ff0000"
            />
        </svg>
    </div>
</template>

<script>
export default {
    name: "Loading"
};
</script>

<style lang="scss" scoped>
.loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & *,
    & *:before,
    & *:after {
        box-sizing: border-box;
        position: relative;
    }

    svg {
        width: calc(100% + 12px);
        height: calc(100% + 12px);
        left: -6px;
        top: -6px;
        position: absolute;
        display: block;
        margin: 0;
        padding: 0;
        transform: rotate(-90deg);

        circle {
            // stroke: #404ce6;
            stroke-width: 4;
            stroke-dasharray: 150, 300;
            stroke-dashoffset: 0;
            animation: stroke 0.66s linear infinite;
            transform-origin: center center;
        }
    }

    &--absolute {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.7);
        z-index: 999;
        align-items: center;
    }

    &__text {
        text-align: center;
        color: #aaa;
        font-size: 14px;
        font-style: italic;
    }

    @keyframes stroke {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
