<template lang="html">
  <div class="user-area">
    <div class="container">
      <h1 class="page-title">{{title}}</h1>
      <hr/>
      <div class="crud-container">
        <b-row>
          <b-col>
            <b-form @submit="addUser">
              <b-form-group id="exampleInputGroup2"
                            label="Your Name:"
                            label-for="exampleInput2">
                <b-form-input id="exampleInput2"
                              type="text"
                              v-model="name"
                              required
                              placeholder="Enter name">
                </b-form-input>
              </b-form-group>
              <b-form-group id="exampleInputGroup1"
                            label="Email address:"
                            label-for="exampleInput1"
                            description="We'll never share your email with anyone else.">
                <b-form-input id="exampleInput1"
                              type="email"
                              v-model="email"
                              required
                              placeholder="Enter email">
                </b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </b-col>
          <b-col cols="8">

            <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
              <div>
                <b-form-group id="exampleInputGroup2"
                              label="Your Name:"
                              label-for="exampleInput2">
                  <b-form-input id="exampleInput2"
                                type="text"
                                v-model="editName"
                                required
                                placeholder="Enter name">
                  </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup1"
                              label="Email address:"
                              label-for="exampleInput1">
                  <b-form-input id="exampleInput1"
                                type="email"
                                v-model="editEmail"
                                required
                                placeholder="Enter email">
                  </b-form-input>
                </b-form-group>
              </div>
              <b-btn class="mt-3" variant="success" @click="saveUser(editKey,editName,editEmail)">Save</b-btn>
              <b-btn class="mt-3" variant="outline-danger" @click="cancelUser(editKey)">Cancel</b-btn>
            </b-modal>

            <!-- <b-table hover :items="items" :fields="fields">
              <template slot="actions" slot-scope="data">
                <b-button size="sm" class="mr-1">
                  Edit
                </b-button>
                <b-button size="sm" @click="removeUser('row.value.key')" class="mr-1">
                  Delete
                </b-button>
              </template>
            </b-table> -->

            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items">
                  <td>{{item.name}}</td>
                  <td>{{item.email}}</td>
                  <td v-bind:key="item['.key']">
                    <button type="button" @click="editUser(item['.key'],item['name'],item['email'])" class="btn mr-1 btn-secondary btn-sm">Edit</button>
                    <button type="button" @click="removeUser(item['.key'])" class="btn mr-1 btn-secondary btn-sm">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>

          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import { userRef } from '../firebase'
export default {
  name: 'Users',
  firebase:{
      items: userRef
  },
  data(){
    return{
      title:'CRUD System in VUE.JS',
      fields:['name','email','actions'],
      name:'',
      email:'',
      editName:'',
      editEmail:'',
      editKey:''
    }
  },
  methods:{
    addUser:function(e){
      e.preventDefault();
      userRef.push({
          email:this.email,
          name:this.name,
          edit:false
        });
        this.name="";
        this.email="";
    },
    removeUser:function(key){
      userRef.child(key).remove();
    },
    editUser:function(key,name,email){
      userRef.child(key).update({edit:true});
      this.editKey=key;
      this.editName=name;
      this.editEmail=email;
      this.$refs.myModalRef.show();
    },
    saveUser:function(key,editName,editEmail){
      userRef.child(key).set({
        name:editName,
        email:editEmail,
        edit:false
      });
      this.$refs.myModalRef.hide();
    },
    cancelUser:function(key){
      userRef.child(key).update({edit:false});
      this.$refs.myModalRef.hide();
    }
  }
}
</script>

<style lang="css">
</style>
