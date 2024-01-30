<template>

 <body>
    <div class="container-scroller">
      <!-- partial:partials/_navbar.html -->
     <NavBar/>
      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_sidebar.html -->
       <SideBar/>
      <!-- partial -->
       <div class="main-panel">
  
  
       
       <slot>
       </slot>

    <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
          <footer class="footer">
            <div class="container-fluid d-flex justify-content-between">
              <span class="text-muted d-block text-center text-sm-start d-sm-inline-block">Copyright © bootstrapdash.com 2021</span>
              <span class="float-none float-sm-end mt-1 mt-sm-0 text-end"> Free <a href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin template</a> from Bootstrapdash.com</span>
            </div>
          </footer>
          <!-- partial -->
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    
  
  </body>
            
</template>

<script>


import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';

export default {
  components:{SideBar,NavBar}

}
</script>

<style>

</style>