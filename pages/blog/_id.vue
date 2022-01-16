<template>
  <h1>{{$route.params.id}}</h1>
</template>

<script>
export default {
//  validate(context){
//  validate({params,query,store}){
 validate({params}){
     return !isNaN(params.id)
 }
}
</script>

<style>

</style>