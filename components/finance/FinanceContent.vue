<template>
  <div class="content-section">
    <!-- My Finances -->
    <div id="finance-my-finances" class="section">
      <h2>My Finances</h2>
      <p>To pay an invoice, navigate to Finances and click on "View" button for the invoice you wish to pay for.</p>
              <div class="figure-container">
          <img src="/media/finance1.png" alt="aying Invoices illustration" class="figure" />
          <div class="figure-caption">Figure: Paying Invoices</div>
        </div>
    </div>

    <!-- View and Pay Invoice -->
    <div id="finance-pay-invoice" class="section">
      <h2>View and Pay Invoice</h2>
      <p>Select the "Pay with Ozow" button on the below screen to pay an invoice</p>
 <div class="figure-container">
          <img src="/media/finance2.png" alt="View and Pay Invoices illustration" class="figure" />
          <div class="figure-caption">Figure: View and Pay Invoices Payment</div>
        </div>
    </div>

    <!-- Pay with Ozow -->
    <div id="finance-pay-ozow" class="section">
      <h2>Pay with Ozow screen</h2>
      <p>Then payment gateway screen for Ozow will be displayed as per below, select any back of your choice, follow prompts and complete the payment. There is also option to cancel payment (Abort payment transaction) then pay at later stage</p>
       <div class="figure-container">
          <img src="/media/finance3.png" alt="Pay with Ozow illustration" class="figure2" />
          <div class="figure-caption">Figure: Pay with Ozow</div>
        </div>
              <p>If for some reason you decide not to proceed with the payment, you may cancel the process.</p>
       <div class="figure-container">
          <img src="/media/finance4.png" alt="Cancel payment illustration" class="figure2" />
          <div class="figure-caption">Figure: Cancel payment</div>
        </div>
    </div>

    <!-- View Statement -->
    <div id="finance-view-statement" class="section">
      <h2>View Statement</h2>
       <div class="figure-container">
          <img src="/media/finance5.png" alt="View Statement illustration" class="figure" />
          <div class="figure-caption">Figure: View Statement</div>
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