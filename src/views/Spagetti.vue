<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-12">
                <h1 class="display-3 text-white">Spagetti Competition Registration</h1>
                <p class="lead text-white">
                  As the world is changing, our challenges grow bigger and bigger that we need more developed
                    creative solutions, we are focusing on the ICT means to handle several challenges from which
                    Upper Egypt suffers such as energy, water, health and community Problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section">
      <div class="container py-0">
        <div class="row row-grid align-items-center">
          <div class="col-lg-12 order-lg-1">
            <ValidationObserver v-slot="{ handleSubmit }">
              <form>
                <div class="mb-4">
                  <hr data-content="Team Information" class="hr-text" />
                </div>
                <div class="row">
                  <!-- Team Name -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Team Name</p>
                    <ValidationProvider
                      mode="lazy"
                      name="team name"
                      rules="required"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="teamName"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="Name"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Team Name -->
                  <!-- University -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">What University are you participating from?</p>
                    <ValidationProvider
                      mode="lazy"
                      name="file"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <dropdown
                        searchable
                        v-model="university"
                        :inputClasses="[errors.length > 0 ? 'border-danger text-danger' : '', university ? 'border-success  text-success' : '']"
                        listTitle="Select University"
                        :options="['Aswan University',
                                    'AAST Aswan',
                                    'Luxor University',
                                    'South Valley University',
                                    'Azhar South Valley University',
                                    'Sohag University',
                                    'Assuit University',
                                    'Minia University',
                                    'Beni-Suif University',
                                    'Nahda University',
                                    'Merit University',
                                    'Higher Institute of Engineering and Technology, Al- Tod']"
                      />
                      <div
                        v-if="errors[0]"
                        class="text-danger invalid-feedback"
                        style="display: block;"
                      >{{errors[0]}}</div>
                    </ValidationProvider>
                  </div>
                  <!-- University -->
                  <!-- Proposal Upload -->
                  <div class="col-md-12 mb-3">
                    <p style="font-weight: bold">Component Paper and Design (Optional)</p>
                      <file-pond
                        name="test"
                        ref="pond"
                        label-idle="Click, or drag to add file ..."
                        :allow-multiple="false"
                        accepted-file-types="application/msword,
                                            application/vnd.openxmlformats-officedocument.wordprocessingml.document, 
                                            application/pdf,
                                            application/vnd.ms-powerpoint,
                                            application/vnd.openxmlformats-officedocument.presentationml.presentation"
                        :file="file"
                        max-files="1"
                        maxFileSize="15MB"
                        v-model="file"
                        class="mb-0"
                      />
                  </div>
                  <!-- Proposal Upload -->
                </div>
                <div class="mb-4">
                  <hr data-content="Team Leader Information" class="hr-text" />
                </div>
                <div class="row">
                  <!-- Leader Name -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Leader Name</p>
                    <ValidationProvider
                      mode="lazy"
                      name="Leader Name"
                      rules="required"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="leader.name"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="Name"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Leader Name -->
                  <!-- Leader Email -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Leader Email</p>
                    <ValidationProvider
                      mode="lazy"
                      name="Supervisor Email"
                      rules="required|email"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="leader.email"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        type="email"
                        placeholder="Email"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Leader Email -->
                  <!-- Leader Mobile -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Leader Mobile</p>
                    <ValidationProvider
                      mode="lazy"
                      name="Leader Mobile"
                      rules="required|numeric|min:11"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="leader.mobile"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="Mobile"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Leader Mobile -->
                  <!-- Leader ID -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Leader National ID Number</p>
                    <ValidationProvider
                      mode="lazy"
                      name="Leader ID"
                      rules="required|numeric|minID:14"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="leader.ID"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="ID Number"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Leader ID -->
                </div>
                <div class="mb-4">
                  <hr data-content="Team Information" class="hr-text" />
                </div>
                <div class="row">
                  <!-- Team Members -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">
                      How many members that will attend UEA'2020?
                      <span class="text-danger">
                        <em>(Max. 5)</em>
                      </span>
                    </p>
                    <ValidationProvider
                      mode="lazy"
                      name="Team Members"
                      rules="required|numeric|max_val:5|min_val:1"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="teamMembers"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="#Team Members"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Team Members -->
                  <!-- Add Member -->
                  <div class="col-md-6">
                    <form>
                      <div class="row">
                        <!-- Member Name -->
                        <div class="col-md-12">
                          <base-input v-model="member.name" placeholder="Member Name"></base-input>
                        </div>
                        <!-- Member Name -->
                        <!-- Member Email -->
                        <div class="col-md-12">
                          <base-input
                            v-model="member.email"
                            type="email"
                            placeholder="Member Email"
                          ></base-input>
                        </div>
                        <!-- Member Email -->
                        <!-- Member Mobile -->
                        <div class="col-md-12">
                          <base-input v-model="member.mobile" placeholder="Member Mobile"></base-input>
                        </div>
                        <!-- Member Mobile -->
                        <!-- Member ID -->
                        <div class="col-md-12">
                          <base-input v-model="member.ID" placeholder="Member ID Number"></base-input>
                        </div>
                        <!-- Member ID -->
                      </div>
                      <div class="row">
                        <!-- Add Member -->
                        <div class="col-md-12">
                          <base-button
                            @click="addNewMember"
                            class="mt-4"
                            block
                            type="primary"
                            :disabled="tableData.length >= teamMembers"
                          >Add Member</base-button>
                        </div>
                        <!-- Add Member -->
                      </div>
                    </form>
                  </div>
                  <!-- Add Member -->
                  <!-- Team Table -->
                  <div class="col-md-6">
                    <div class="card">
                      <div style="background-color: #fff" class="card-header border-0">
                        <div class="row align-items-center">
                          <div class="col">
                            <h3
                              style="font-size: 1.0625rem; font-weight: 700"
                              class="mb-0"
                            >Team Members</h3>
                          </div>
                        </div>
                      </div>

                      <div style="overflow-x: hidden" class="table-responsive">
                        <base-table thead-classes="thead-light" :data="tableData">
                          <template slot="columns">
                            <div style="overflow: hidden" class="row">
                              <th class="col-lg-2">No.</th>
                              <th class="col-lg-10">Member Name</th>
                            </div>
                          </template>

                          <template slot-scope="{row}">
                            <div class="row">
                              <td class="col-lg-2" scope="row">{{row.no}}</td>
                              <td class="col-lg-10">{{ row.member}}</td>
                            </div>
                          </template>
                        </base-table>
                      </div>
                    </div>
                  </div>
                  <!-- Team Table -->
                </div>
                <div class="row">
                  <!-- Register -->
                  <div class="col-md-12">
                    <base-button
                      :disabled="isLoading"
                      @click="handleSubmit(register)"
                      class="mt-4"
                      block
                      type="success"
                    >
                      <div v-if="isLoading" class="loader"></div>Submit Project
                    </base-button>
                  </div>
                  <!-- Register -->
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import {
  required,
  email,
  min,
  numeric,
  max_value,
  min_value
} from "vee-validate/dist/rules";
extend("email", email);
extend("min", {
  ...min,
  message: "This field must be 11 digits"
});
extend("max_val", {
  ...max_value,
  message: "Maximum number of members is 5"
});
extend("min_val", {
  ...min_value,
  message: "Minimum number of members is 1"
});
extend("minID", {
  ...min,
  message: "This field must be 14 digits"
});
extend("numeric", {
  ...numeric,
  message: "This field must be numeric"
});
extend("required", {
  ...required,
  message: "This field is required"
});
import dropdown from "@/components/vendor/Dropdown";
import vueFilePond from "vue-filepond";
import filepondSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";

import "filepond/dist/filepond.min.css";

const FilePond = vueFilePond(filepondSize, FilePondPluginFileValidateType);

import { spagettiRegister } from "@/core/Competitions/competitions.services";

export default {
  name: "home",
  components: {
    BCarousel,
    BCarouselSlide,
    ValidationProvider,
    ValidationObserver,
    FilePond,
    dropdown
  },
  data() {
    return {
      isLoading: false,
      teamName: "",
      file: null,
      university: null,
      leader: {
        name: "",
        email: "",
        mobile: "",
        ID: ""
      },
      member: {
        name: "",
        email: "",
        mobile: "",
        ID: "",
        attend: false
      },
      teamMembers: null,
      tableData: [],
      members: []
    };
  },
  methods: {
    register() {
      if (this.tableData.length > 5 || this.tableData.length === 0) {
        alert("Please, fill out your team data");
        return;
      }
      if (Object.keys(this.file).length === 0) {
        this.file = null
      } else {
        this.file = this.$refs.pond.getFiles().map(({ file }) => file)[0];
      }

      this.isLoading = true;
      let payload = {
        teamName: this.teamName,
        projectFile: this.file,
        university: this.university,
        leader: this.leader,
        members: this.members,
        teamMembers: this.teamMembers
      };
      
      spagettiRegister(payload)
        .then(({ message }) => {
          this.isLoading = false;
          alert(message);
          this.$router.push('/register-exhibitors')
        })
        .catch(err => {
          this.isLoading = false;
          alert(err);
        });
    },
    addNewMember() {
      if (this.tableData.length === 5) {
        return;
      }
      if (
        this.member.name === "" ||
        this.member.email === "" ||
        this.member.mobile === "" ||
        this.member.ID === ""
      ) {
        alert("Please, complete member info");
        return;
      }
      let Obj = {
        no: this.tableData.length + 1,
        member: this.member.name
      };
      this.members.push({
        name: this.member.name,
        email: this.member.email,
        mobile: this.member.mobile,
        ID: this.member.ID
      });
      this.tableData.push(Obj);
      this.member.name = "";
      this.member.email = "";
      this.member.mobile = "";
      this.member.ID = "";
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_breakpoints";
.section-shaped .shape.shape-skew + .shape-container {
    padding-top: 13rem;
  @include respond-below(md) {
    padding-top: 11rem;
  }
  padding-bottom: 20px !important;
}
.section-shaped {
  color: #fff;
  // height: 500px;
}
.shape-skew {
  transform: skewY(0deg) !important;
}
.slider-img {
  height: 500px;
  @include respond-below(md) {
    height: 200px;
  }
}
.slider-section {
  padding-top: 5.3rem;
  padding-bottom: 0;
  @include respond-below(md) {
    padding-top: 3.9rem;
    padding-bottom: 0;
  }
}
.section-shaped .shape-style-1.shape-default {
  background: linear-gradient(150deg, #3d4f8e 15%, #262d73 70%, #354279 94%);
}
hr.hr-text {
  position: relative;
  border: none;
  height: 1px;
  background: #999;
}

hr.dashed {
  border-top: 2px dashed #999;
}

hr.dotted {
  border-top: 2px dotted #999;
}

hr.solid {
  border-top: 2px solid #999;
}

hr.hr-text {
  position: relative;
  border: none;
  height: 1px;
  background: #999;
}

hr.hr-text::before {
  content: attr(data-content);
  display: inline-block;
  background: #fff;
  font-weight: bold;
  font-size: 0.85rem;
  color: #999;
  border-radius: 30rem;
  padding: 0.2rem 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader {
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: spin 2s linear infinite;
  display: inline-block;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
