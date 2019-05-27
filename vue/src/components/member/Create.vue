<template>
    <form method="post" @submit.stop.prevent="memberCreateSubmit">
        <div>
            <label for="mamberName">Name</label>
            <input type="text" name="memberName" required v-model="member.memberName" />
        </div>
        <div>
            <label for="mamberId">ID</label>
            <input type="text" name="memberId" required v-model="member.memberId" />
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
    </form>
    
</template>
<<script>
export default {
    data() {
        return{
            member: {
                memberName: "",
                memberId:"",
            },
            response: ""
        }
    },
    methods: {
        memberCreateSubmit(){
            this.$http.post('/api/member', this.member)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err.message);
            });
            
            this.$router.push({name: "MemberList"});
        }
    },
    created() {
        console.log(this.member);
    },
}
</script>