<script setup>
    defineProps(['name', 'placeholder', 'value'])
    defineEmits(['onSubmit', 'update:value'])
</script>

<template>
    <div class="input-group">
      <input
        class="input-field"
        type="text"
        autofocus
        :name="name"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
      >
      <button @click="$emit('onSubmit')">Add</button>
    </div>
</template>

<style>
  .input-group{
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .input-group > input{
    width: 100%;
    padding: 1.25rem 0.75rem;
    border: 1px solid #BDBDBD;
    border-radius: 12px;
    font-size: 14px;
  }

  .input-group > button{
    cursor: pointer;
    padding: 1.25rem 2.5rem;
    border: none;
    border-radius: 12px;
    background-color: #2F80ED;
    box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
    color: #FFF;
    font-weight: 600;
  }

  .input-group > button:hover{
    background-color: #246bc6;
  }
</style>