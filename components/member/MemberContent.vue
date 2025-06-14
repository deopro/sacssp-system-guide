<template>
  <div class="content-section">
    <!-- New Application Section -->
    <div id="member-new-application" class="section">
      <h2>1.1 New Application</h2>
      <p>The next step will be to add the address. On the address screen, fill in your residential and postal address then click "Save".</p>
      <ul class="list">
        <li>If the user selects "South African Citizen" both the ID (required) and passport (optional) fields are visible, and the "Citizenship" field is hidden.</li>
        <li>If the user selects "Non-South African Citizen" the ID field is hidden. The passport filed is required and the "Citizenship" field is visible.</li>
        <li>If the user selects "Permanent Resident with ID" both the ID (required) and passport (optional) fields are visible, and the "Citizenship" field is visible.</li>
      </ul>
      <div class="figure-container">
      <img src="/media/new-application.png" alt="New Application illustration" class="figure" />
      <div class="figure-caption">Figure: New Application Page</div>
    </div>
    </div>

    <!-- New Registration Email Section -->
    <div id="member-new-registration-email" class="section">
      <h2>1.2 New Registration Email</h2>
      <div class="figure-container">
      <img src="/media/new-registration.png" alt="New Registration Email illustration" class="figure" />
      <div class="figure-caption">Figure: New Registration Email</div>
    </div>
    </div>

    <!-- Address Details Section -->
    <div id="member-address-details" class="section">
      <h2>1.3 Address Details</h2>
      <p>The next step will be to add the address. On the address screen, fill in your residential and postal address then click "Save".</p>
      <div class="figure-container">
      <img src="/media/new-reg-address.png" alt="Address information illustration" class="figure" />
      <div class="figure-caption">Figure: Address information</div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Member content component
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

.list {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.list li {
  margin-bottom: 0.5rem;
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

.caption {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}
</style> 