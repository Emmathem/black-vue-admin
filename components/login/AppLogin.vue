<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col :cols="6" class="login_side">
          <div class="__innerSide">
            <p>Welcome</p>
          </div>
        </b-col>
        <b-col :cols="6" class="login_main_form">
          <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="showForm">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Your Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  required
                  placeholder="Enter name"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-3"
                label="Your Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="Enter password"
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ form }}</pre>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showForm: true,
      form: {},
    };
  },
  methods: {
    onSubmit() {},
    onReset() {},
  },
};
</script>

<style scoped></style>
