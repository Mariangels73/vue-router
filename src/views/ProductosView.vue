<template>
    <div class="producto">
      <h1>Productos</h1>
      <p>Nombre: {{ nombre }}</p>
      <p>Descripción: {{ descripcion }}</p>
      <p>Precio: {{ precio }}</p>
      <p>Cantidad: {{ cantidad }}</p>
      <router-link class="btn btn-success" to="/">Volver al inicio</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductosView',
    props: {
      nombre: String,
      descripcion: String,
      precio: Number,
      cantidad: Number
    }
  }
  </script>
  
  <style>
    .producto{
        padding-top: 100px;
        padding-bottom: 15px;
        padding-left: 15px;
    }
  </style>
  