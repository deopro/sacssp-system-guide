<template>
  <div class="content-section">
    <!-- My Finances -->
    <div id="finance-my-finances" class="section">
      <h2>5.1 My Finances</h2>
      <p>To pay an invoice, navigate to Finances and click on "View" button for the invoice you wish to pay for.</p>
      <div class="card">
        <div class="image-placeholder">
          <span>Image placeholder</span>
        </div>
        <p class="caption">Figure: Pay Invoice</p>
      </div>
    </div>

    <!-- View and Pay Invoice -->
    <div id="finance-pay-invoice" class="section">
      <h2>5.2 View and Pay Invoice</h2>
      <p>Select the "Pay with Ozow" button on the below screen to pay an invoice</p>
      <div class="card">
      </div>
    </div>

    <!-- Pay with Ozow -->
    <div id="finance-pay-ozow" class="section">
      <h2>5.3 Pay with Ozow screen</h2>
      <p>Then payment gateway screen for Ozow will be displayed as per below, select any back of your choice, follow prompts and complete the payment. There is also option to cancel payment (Abort payment transaction) then pay at later stage</p>
      <div class="image-grid">
        <div class="card">
        </div>
        <div class="card">
        </div>
      </div>
    </div>

    <!-- View Statement -->
    <div id="finance-view-statement" class="section">
      <h2>5.4 View Statement</h2>
      <div class="card">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Finance content component
</script>

<style scoped>
.content-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section {
  scroll-margin-top: 5rem;
}

.section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section p {
  margin-bottom: 1rem;
}

.card {
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
}

.image-placeholder {
  width: 100%;
  height: 12rem;
  background-color: #e5e7eb;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder span {
  color: #6b7280;
}

.image {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.caption {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.image-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style> 