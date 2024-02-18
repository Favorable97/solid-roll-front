<template>
    <div class="contacts-section">
      <h2>Контакты</h2>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-text>
              <v-icon>mdi-map-marker</v-icon>
              <span class="contact-label">Адрес:</span>
              <span class="contact-value">ул. Карла Маркса, 10, г. Владикавказ</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-text>
              <v-icon>mdi-phone</v-icon>
              <span class="contact-label">Телефон:</span>
              <span class="contact-value">+7 800 555 35 35</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-text>
              <v-icon>mdi-email</v-icon>
              <span class="contact-label">Email:</span>
              <span class="contact-value">info@solidroll.com</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-text>
              <v-icon>mdi-clock</v-icon>
              <span class="contact-label">Режим работы:</span>
              <span class="contact-value">Пн-Пт: 09:00 - 22:00, Сб-Вс: 09:30 - 23:00</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <style scoped>
  .contacts-section {
    margin-top: 20px;
  }
  
  .contact-label {
    font-weight: bold;
    margin-left: 10px;
  }
  
  .contact-value {
    margin-left: 5px;
  }
  </style>