<template>
  <div>
    <div class="pdf-list">
      <h2>PDF List</h2>
      <ul>
        <li v-for="(pdf, index) in pdfList" :key="index" @click="showPreview(pdf)"
          :class="{ active: pdf === selectedPDF }">
          {{ pdf.name }}
        </li>
      </ul>
    </div>
    <div class="pdf-preview">
      <h2>PDF Preview</h2>
      <div v-if="selectedPDF">
        <!-- Use embed or object tag to display PDF -->
        <h3>{{ selectedPDF.name }}</h3>
        <embed :src="selectedPDF.url" type="application/pdf" width="100%" height="800px" />
      </div>
      <div v-else>
        <div class="no-pdf">
          <p>No PDF selected</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pdfList: [
        { name: 'PDF 1', url: 'https://ncu.rcnpv.com.tw/Uploads/20131231103232738561744.pdf' },
        { name: 'PDF 2', url: 'https://www.orimi.com/pdf-test.pdf' },
        { name: 'PDF 3', url: 'https://www.clickdimensions.com/links/TestPDFfile.pdf' },
        { name: 'PDF 4', url: 'https://www.orimi.com/pdf-test.pdf' },
      ],
      selectedPDF: null,
    };
  },
  methods: {
    showPreview(pdf) {
      this.selectedPDF = pdf;
    },
  },
};
</script>

<style>
.pdf-list {
  float: left !important;
  width: 20%;
  padding: 20px;
}

.pdf-preview {
  float: left !important;
  width: 70%;
  padding: 20px;

}

ul {
  list-style: none;
  padding: 0;
}

li {
  cursor: pointer;
  margin-bottom: 8px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

li:hover {
  background-color: #f0f0f0;

}

.no-pdf {
  height: 80vh !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

li.active {
  background-color: rgb(65, 65, 65);
  color: white;
  padding-left: 20px;
  transition: all 8ms;
  /* Optionally, adjust text color for better readability */
}
</style>
