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
                <h1 class="display-3 text-white">Entrepreneurship Hackathon Registration</h1>
                <p class="lead text-white">
                                 Teams gather to solve problems by thinking out of the box and challenge themselves to create something new from the perspective technology and business.
                  In The end teams shows their projects to judges and investors.

                  <span style="font-size: 16px;color: #fff">this year's challenges</span>
                  <br />
                  <b>(1) Climate Changes</b>
                  <br />
                  The risks of (water level rais - flooding - longer and frequent periods of drought)
                  Or any other effects of climat changes

                  <br />
                  <b>(2) water management</b>
                  <br />

                  <ul>
                    <li>Drinking water quality contral.</li>
                    <li>Onsite waste water reuse</li>
                    <li>Atmosphiric water generation(AWG)</li>
                    <li>Eco-friendly desalination.</li>
                  </ul>
                  <b>(3) Waste Management</b>
                  <ul>
                    <li>Reducing home waste</li>
                    <li>Waste to energy</li>
                    <li>Ondemand waste pick up</li>
                  </ul>
                  <em>**Note: The idea should be commercial</em>
                  
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
                  <!-- Leader Birthdate -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Leader Birthdate</p>
                    <ValidationProvider
                      mode="lazy"
                      name="Leader Birthdate"
                      rules="required"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :valid="!touched ? null : ( valid ? true : false )"
                        placeholder="Birthdate"
                        addon-left-icon="ni ni-calendar-grid-58"
                        v-model="leader.birthdate"
                        :error="errors[0]"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                      >
                        <flat-picker
                          :config="{allowInput: true}"
                          class="form-control datepicker"
                          v-model="leader.birthdate"
                        ></flat-picker>
                      </base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Leader Birthdate -->
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
                  <!-- Government -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Government</p>
                    <ValidationProvider
                      mode="lazy"
                      name="government"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <dropdown
                        searchable
                        v-model="leader.government"
                        :inputClasses="[errors.length > 0 ? 'border-danger text-danger' : '', leader.government ? 'border-success  text-success' : '']"
                        listTitle="Select Government"
                        :options="['Aswan',
                                    'Luxor',
                                    'Qena',
                                    'Sohag',
                                    'Assuit',
                                    'Minia',
                                    'Beni-Suif']"
                      />
                      <div
                        v-if="errors[0]"
                        class="text-danger invalid-feedback"
                        style="display: block;"
                      >{{errors[0]}}</div>
                    </ValidationProvider>
                  </div>
                  <!-- Government -->
                  <!-- University -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">University</p>
                    <ValidationProvider
                      mode="lazy"
                      name="university"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <dropdown
                        searchable
                        v-model="leader.university"
                        :inputClasses="[errors.length > 0 ? 'border-danger text-danger' : '', leader.university ? 'border-success  text-success' : '']"
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
                  <!-- Leader Faculty -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Leader Faculty</p>
                    <ValidationProvider
                      mode="lazy"
                      name="Leader Faculty"
                      rules="required"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="leader.faculty"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="Faculty"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Leader Faculty -->
                  <!-- Leader Specialization  -->
                  <div class="col-md-12">
                    <p style="font-weight: bold">Leader Specialization</p>
                    <ValidationProvider
                      mode="lazy"
                      name="Leader Specialization "
                      rules="required"
                      v-slot="{ errors, touched, valid }"
                    >
                      <base-input
                        :error="errors[0]"
                        v-model="leader.specialization"
                        :valid="!touched ? null : ( valid ? true : false )"
                        :inputClasses="errors.length > 0 ? 'is-invalid' : ''"
                        placeholder="Specialization"
                      ></base-input>
                    </ValidationProvider>
                  </div>
                  <!-- Leader Specialization  -->
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
                        <em>(Max. 4 + Leader)</em>
                      </span>
                    </p>
                    <ValidationProvider
                      mode="lazy"
                      name="Team Members"
                      rules="required|numeric|max_val:4|min_val:1"
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
                        <!-- Member Birthdate -->
                        <div class="col-md-12">
                          <base-input
                            placeholder="Birthdate"
                            addon-left-icon="ni ni-calendar-grid-58"
                            v-model="member.birthdate"
                          >
                            <flat-picker
                              :config="{allowInput: true}"
                              class="form-control datepicker"
                              v-model="member.birthdate"
                            ></flat-picker>
                          </base-input>
                        </div>
                        <!-- Member Birthdate -->
                        <!-- Member ID -->
                        <div class="col-md-12">
                          <base-input v-model="member.ID" placeholder="Member ID Number"></base-input>
                        </div>
                        <!-- Member ID -->
                        <!-- Member Mobile -->
                        <div class="col-md-12">
                          <base-input v-model="member.mobile" placeholder="Member Mobile"></base-input>
                        </div>
                        <!-- Member Mobile -->
                        <!-- Government -->
                        <div class="col-md-12">
                          <dropdown
                            searchable
                            v-model="member.government"
                            listTitle="Select Government"
                            :options="['Aswan',
                                    'Luxor',
                                    'Qena',
                                    'Sohag',
                                    'Assuit',
                                    'Minia',
                                    'Beni-Suif']"
                          />
                        </div>
                        <!-- Government -->
                        <!-- Member University -->
                        <div class="col-md-12">
                          <dropdown
                            searchable
                            v-model="member.university"
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
                        </div>
                        <!-- Member University -->
                        <!-- Leader Faculty -->
                        <div class="col-md-12">
                          <base-input v-model="member.faculty" placeholder="Faculty"></base-input>
                        </div>
                        <!-- Leader Faculty -->
                        <!-- Leader Specialization  -->
                        <div class="col-md-12">
                          <base-input v-model="member.specialization" placeholder="Specialization"></base-input>
                        </div>
                        <!-- Leader Specialization  -->
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
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

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
  message: "Maximum number of members is 4"
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

import { hackathonRegister } from "@/core/Competitions/competitions.services";

export default {
  name: "home",
  components: {
    BCarousel,
    BCarouselSlide,
    ValidationProvider,
    ValidationObserver,
    dropdown,
    flatPicker
  },
  data() {
    return {
      isLoading: false,
      teamName: "",
      leader: {
        name: "",
        birthdate: "",
        ID: "",
        mobile: "",
        government: null,
        university: null,
        faculty: "",
        specialization: ""
      },
      member: {
        name: "",
        birthdate: "",
        ID: "",
        mobile: "",
        government: null,
        university: null,
        faculty: "",
        specialization: ""
      },
      teamMembers: null,
      tableData: [],
      members: []
    };
  },
  methods: {
    register() {
      if (this.tableData.length > 4 || this.tableData.length === 0) {
        alert("Please, fill out your team data");
        return;
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

      hackathonRegister(payload)
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
      if (this.tableData.length === 4) {
        return;
      }
      if (
        this.member.name === "" ||
        this.member.birthdate === "" ||
        this.member.ID === "" ||
        this.member.mobile === "" ||
        this.member.government === "" ||
        this.member.university === "" ||
        this.member.faculty === "" ||
        this.member.specialization === ""
      ) {
        alert("Please, complete member info");
        return;
      }
      let Obj = {
        no: this.tableData.length + 1,
        member: this.member.name
      };
      this.tableData.push(Obj);
      this.members.push({
        name: this.member.name,
        birthdate: this.member.birthdate,
        ID: this.member.ID,
        mobile: this.member.mobile,
        government: this.member.government,
        university: this.member.university,
        faculty: this.member.faculty,
        specialization: this.member.specialization
      });
      this.member.name = "";
      this.member.birthdate = "";
      this.member.ID = "";
      this.member.mobile = "";
      this.member.government = null;
      this.member.university = null;
      this.member.faculty = "";
      this.member.specialization = "";
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
