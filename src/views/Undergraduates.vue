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
                <h1 class="display-3 text-white">Undergraduates Competition Registration</h1>
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
                  <hr data-content="Project Information" class="hr-text" />
                </div>
                <div class="row">
                  <!-- Project Title -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Project Title</p>
                    <ValidationProvider
                      mode="lazy"
                      name="title"
                      rules="required"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="title"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="Title"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Project Title -->
                  <!-- Project Category -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Project Category</p>
                    <ValidationProvider
                      mode="lazy"
                      name="email"
                      rules="required"
                      v-slot="{ errors, touched, valid }"
                    >
                      <div class="row">
                        <div class="col-md-4">
                          <base-radio
                            name="ICT and Embedded Systems"
                            class="mb-3"
                            v-model="category"
                          >ICT and Embedded Systems</base-radio>
                        </div>
                        <div class="col-md-4">
                          <base-radio
                            name="Artificial Intelligent"
                            class="mb-3"
                            v-model="category"
                          >Artificial Intelligent</base-radio>
                        </div>
                        <div class="col-md-4">
                          <base-radio
                            name="Food Security"
                            class="mb-3"
                            v-model="category"
                          >Food Security</base-radio>
                        </div>
                        <div class="col-md-4">
                          <base-radio
                            name="Affordable and Clean Energy"
                            class="mb-3"
                            v-model="category"
                          >Affordable and Clean Energy</base-radio>
                        </div>
                        <div class="col-md-4">
                          <base-radio
                            name="Sustainable Cities and Societies"
                            class="mb-3"
                            v-model="category"
                          >Sustainable Cities and Societies</base-radio>
                        </div>
                        <div class="col-md-4">
                          <base-radio
                            name="Clean Water and Sanitation"
                            class="mb-3"
                            v-model="category"
                          >Clean Water and Sanitation</base-radio>
                        </div>
                        <div class="col-md-4">
                          <base-radio
                            name="Climate Change and Environmental"
                            class="mb-3"
                            v-model="category"
                          >Climate Change and Environmental</base-radio>
                        </div>
                        <div class="col-md-4">
                          <base-radio
                            name="Urban Life Developments"
                            class="mb-3"
                            v-model="category"
                          >Urban Life Developments</base-radio>
                        </div>
                      </div>
                    </ValidationProvider>
                  </div>
                  <!-- Project Category -->
                  <!-- Prototype -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Does the project have a prototype?</p>
                    <ValidationProvider
                      mode="lazy"
                      name="hasPrototype"
                      rules="required"
                      v-slot="{ errors, touched, valid }"
                    >
                      <div class="row">
                        <div class="col-md-6">
                          <base-radio name="true" class="mb-3" v-model="hasPrototype">Yes</base-radio>
                        </div>
                        <div class="col-md-6">
                          <base-radio name="false" class="mb-3" v-model="hasPrototype">No</base-radio>
                        </div>
                      </div>
                    </ValidationProvider>
                  </div>
                  <!-- Prototype -->
                  <!-- Prototype Dimensions -->
                  <div v-if="hasPrototype === 'true'" class="col-md-12">
                    <p style="font-weight: bold">Prototype Dimensions</p>
                    <ValidationProvider
                      mode="lazy"
                      name="prototype_dimensions"
                      :rules="{ required: hasPrototype ? true : false}"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="prototypeDimensions"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :class="[ errors.length > 0 ? 'is-invalid' : '']"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="Prototype Dimensions"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Prototype Dimensions -->
                  <!-- Project Abstract -->
                  <div class="col-md-12 mb-3">
                    <p style="font-weight: bold">Project Abstract</p>
                    <ValidationProvider
                      mode="lazy"
                      name="abstract"
                      rules="required"
                      v-slot="{ errors, touched, valid }"
                    >
                      <!-- <textarea class="form-control" rows="3" placeholder="Write a large text here ..."></textarea> -->
                      <textarea
                        rows="4"
                        type="text"
                        :error="errors[0]"
                        v-model="abstract"
                        class="form-control"
                        :class="[ errors.length > 0 || (touched && !valid) ? 'border-danger' : '', touched && valid ? 'border-success' : '']"
                        placeholder="Write abstract here ..."
                      ></textarea>
                      <div
                        v-if="errors[0]"
                        class="text-danger invalid-feedback"
                        style="display: block;"
                      >{{errors[0]}}</div>
                    </ValidationProvider>
                  </div>
                  <!-- Project Abstract -->
                  <!-- Proposal Upload -->
                  <div class="col-md-12 mb-3">
                    <p style="font-weight: bold">Proposal Upload</p>
                    <ValidationProvider
                      mode="lazy"
                      name="file"
                      rules="required"
                      v-slot="{ errors }"
                    >
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
                      <div
                        class="text-danger invalid-feedback"
                        style="display: block;"
                      >{{errors[0]}}</div>
                    </ValidationProvider>
                  </div>
                  <!-- Proposal Upload -->
                </div>
                <div class="mb-4">
                  <hr data-content="Institute Information" class="hr-text" />
                </div>
                <div class="row">
                  <!-- University -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">University</p>
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
                  <!-- Faculty -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Faculty</p>
                    <ValidationProvider
                      mode="lazy"
                      name="faculty"
                      rules="required"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="faculty"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="Faculty"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Faculty -->
                </div>
                <div class="mb-4">
                  <hr data-content="Supervisor Information" class="hr-text" />
                </div>
                <div class="row">
                  <!-- Supervisor Name -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Supervisor Name</p>
                    <ValidationProvider
                      mode="lazy"
                      name="supervisorName"
                      rules="required"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="supervisor.name"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="Name"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Supervisor Name -->
                  <!-- Supervisor Email -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Supervisor Email</p>
                    <ValidationProvider
                      mode="lazy"
                      name="Supervisor Email"
                      rules="required|email"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="supervisor.email"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        type="email"
                        placeholder="Email"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Supervisor Email -->
                  <!-- Supervisor Mobile -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Supervisor Mobile</p>
                    <ValidationProvider
                      mode="lazy"
                      name="Supervisor Mobile"
                      rules="required|numeric|min:11"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="supervisor.mobile"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="Mobile"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Supervisor Mobile -->
                  <!-- Supervisor ID -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Supervisor National ID Number</p>
                    <ValidationProvider
                      mode="lazy"
                      name="Supervisor ID"
                      rules="required|numeric|minID:14"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="supervisor.ID"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="ID Number"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Supervisor ID -->
                  <!-- Prototype -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Will the supervisor attend UEA'2020?</p>
                    <ValidationProvider
                      mode="lazy"
                      name="hasPrototype"
                      rules="required"
                      v-slot="{ }"
                    >
                      <div class="row">
                        <div class="col-md-6">
                          <base-radio name="true" class="mb-3" v-model="supervisor.attend">Yes</base-radio>
                        </div>
                        <div class="col-md-6">
                          <base-radio name="false" class="mb-3" v-model="supervisor.attend">No</base-radio>
                        </div>
                      </div>
                    </ValidationProvider>
                  </div>
                  <!-- Prototype -->
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
                        <em>(Max. 5, and only 2 will attend the project judging)</em>
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
                        <!-- Member Attendance -->
                        <div class="col-md-12">
                          <p style="font-weight: bold">Will the member attend UEA'2020?</p>
                          <div class="row">
                            <div class="col-md-6">
                              <base-radio name="true" class="mb-3" v-model="member.attend">Yes</base-radio>
                            </div>
                            <div class="col-md-6">
                              <base-radio name="false" class="mb-3" v-model="member.attend">No</base-radio>
                            </div>
                          </div>
                        </div>
                        <!-- Member Attendance -->
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
                              <th class="col-lg-7">Member Name</th>
                              <th class="col-lg-3">Will Attend?</th>
                            </div>
                          </template>

                          <template slot-scope="{row}">
                            <div class="row">
                              <td class="col-lg-2" scope="row">{{row.no}}</td>
                              <td class="col-lg-7">{{ row.member}}</td>
                              <td class="col-lg-3">
                                <badge
                                  :type="row.attend === 'Pending' ? 'default' : (row.attend === 'true' ? 'success' : 'danger')"
                                >{{row.attend === 'true' ? 'YES' : 'NO'}}</badge>
                              </td>
                            </div>
                          </template>
                        </base-table>
                      </div>
                    </div>
                  </div>
                  <!-- Team Table -->
                </div>
                <div class="mb-4">
                  <hr data-content="Accommodation and Meals" class="hr-text" />
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <base-checkbox
                      class="mb-3"
                      v-model="accommodation"
                    >Do you want us to provide you with accommodation?</base-checkbox>
                  </div>
                  <div class="col-md-12">
                    <base-checkbox
                      class="mb-3"
                      v-model="meals"
                    >Do you want us to provide you with meals?</base-checkbox>
                  </div>
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

import { undergraduatesRegister } from "@/core/Competitions/competitions.services";

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
      title: "",
      category: "ICT and Embedded Systems",
      hasPrototype: false,
      prototypeDimensions: "",
      abstract: "",
      file: null,
      university: null,
      faculty: "",
      supervisor: {
        name: "",
        email: "",
        mobile: "",
        ID: "",
        attend: false
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
      members: [],
      accommodation: false,
      meals: false
    };
  },
  methods: {
    register() {
      if (this.tableData.length > 5 || this.tableData.length === 0) {
        alert("Please, fill out your team data");
        return;
      }
      if (Object.keys(this.file).length === 0) {
        alert("Please, provide us with the project proposal");
        return;
      }
      this.file = this.$refs.pond.getFiles().map(({ file }) => file)[0];
      this.isLoading = true;
      let payload = {
        title: this.title,
        category: this.category,
        hasPrototype: this.hasPrototype,
        prototypeDimensions:
          this.prototypeDimensions === ""
            ? "No Dimensions"
            : this.prototypeDimensions,
        abstract: this.abstract,
        projectFile: this.file,
        university: this.university,
        faculty: this.faculty,
        supervisor: this.supervisor,
        members: this.members,
        teamMembers: this.teamMembers,
        accommodation: this.accommodation,
        meals: this.meals
      };
      undergraduatesRegister(payload)
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
        member: this.member.name,
        attend: this.member.attend
      };
      this.members.push({
        name: this.member.name,
        email: this.member.email,
        mobile: this.member.mobile,
        ID: this.member.ID,
        attend: this.member.attend
      });
      this.tableData.push(Obj);
      this.member.name = "";
      this.member.email = "";
      this.member.mobile = "";
      this.member.ID = "";
      this.member.attend = false;
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
