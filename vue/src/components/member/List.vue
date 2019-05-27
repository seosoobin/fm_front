<template>
  <div class="members">
    <h1>Member List</h1>
    <div v-for="member in members" class="member" :key="member._id">
      <div>
        <router-link :to="{ name: 'MemberDetail', params: { id: member._id }}">
          Name : <strong>{{member.memberName}}</strong>, <i></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('/api/member')
    .then((response) => {
      this.members = response.data
    })
  },
  data () {
    return {
      members: []
    }
  }
}
</script>