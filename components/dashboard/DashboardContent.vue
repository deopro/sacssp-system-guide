<template>
  <div class="space-y-8">
    <!-- Dashboard Overview -->
    <div id="dashboard-main" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">User Dashboard</h2>
      <p class="mb-4">After the user has successfully added their address, they are redirected to the dashboard.</p>
      <div class="bg-gray-100 p-4 rounded-lg">
      </div>
      <p class="mt-4">On the "Dashboard" screen, users can edit their residential and postal address, upload documents,
        add a profession(s), qualification(s), and access their financial details.</p>
    </div>

    <!-- Changing Address -->
    <div id="dashboard-change-address" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">Changing Address</h2>
      <p class="mb-4">On the dashboard screen select "Address" (it is selected by default) and then click on the button
        to edit the desired address. On the next screen make the necessary changes and click on the "Save" button.</p>
      <div class="figure-container">
        <img src="/media/dashboard-address.png" alt="Changing Address illustration" class="figure" />
        <div class="figure-caption">Figure: Changing Address</div>
      </div>
    </div>

    <!-- Uploading Documents -->
    <div id="dashboard-upload-documents" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">Uploading Documents</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-4">I. Navigate to members profile, click on "Documents" and then "Upload ID/Passport". You will
            be redirected to "Upload Documents" page.</p>
          <div class="figure-container">
            <img src="/media/dashboard-upload.png" alt="Uploading Documents illustration" class="figure" />
            <div class="figure-caption">Figure: Uploading Documents</div>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg">
          </div>
        </div>

        <div>
          <p class="mb-4">II. Click "Choose Files" and a pop-up screen will open. Navigate to the folder where the
            desired file is saved, select it and click "Save".</p>
          <div class="figure-container">
            <img src="/media/dashboard-upload2.png" alt="Uploading Documents illustration" class="figure" />
            <div class="figure-caption">Figure: Uploading Documents</div>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg">
          </div>
        </div>

        <div>
          <p class="mb-4">III. After you have successfully uploaded your document, you will find the uploaded document
            saved on the documents.</p>
          <div class="figure-container">
            <img src="/media/dashboard-uploaded-doc.png" alt="Uploading Documents illustration" class="figure" />
            <div class="figure-caption">Figure: Uploaded Documents</div>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg">
          </div>
        </div>

        <div>
          <p class="mb-4">IV. Delete a document by clicking the "bin" button on the right side of the saved document. A
            confirmation message will be displayed if the deletion has been successful.</p>
          <div class="figure-container">
            <img src="/media/dashboard-delete-doc.png" alt="Delete Documents illustration" class="figure" />
            <div class="figure-caption">Figure: Delete Documents</div>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg">
          </div>
        </div>
      </div>
    </div>

    <!-- Professions -->
    <div id="dashboard-professions" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">4.3 Professions</h2>
      <p class="mb-4">i. Navigate to members profile, click on "Professions" tab a list of your professions will be
        displayed.</p>
      <div class="figure-container">
        <img src="/media/dashboard-professions.png" alt="Professions illustration" class="figure" />
        <div class="figure-caption">Figure: Professions</div>
      </div>
      <div class="bg-gray-100 p-4 rounded-lg">
      </div>
    </div>

    <!-- Add Qualifications -->
    <div id="dashboard-qualifications" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">4.4 Add Qualifications</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-4">i. Navigate to members profile, click on "Qualifications" and then "New Qualification". You
            will be redirected to another page.</p>
          <div class="figure-container">
            <img src="/media/dashboard-qualifications.png" alt="Qualifications illustration" class="figure" />
            <div class="figure-caption">Figure: Qualifications</div>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg">
          </div>
        </div>

        <div>
          <p class="mb-4">ii. Fill in the required fields and then click "Save".</p>
          <div class="figure-container">
            <img src="/media/dashboard-qualifications2.png" alt="Qualifications illustration" class="figure" />
            <div class="figure-caption">Figure: Qualifications</div>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg">
          </div>
        </div>

        <div>
          <p class="mb-4">iii. After saving your qualification successfully, it will be listed under "My Qualifications"
            on the members profile page.</p>
          <div class="figure-container">
            <img src="/media/dashboard-qualifications3.png" alt="Qualifications illustration" class="figure" />
            <div class="figure-caption">Figure: Qualifications</div>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Dashboard content component
</script>