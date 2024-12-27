
# Bios Boot sequence

During the BIOS boot sequence, the `sysio.roa` account is created alongside all other system accounts. Once established, `sysio.roa` is allocated all SYS tokens, and the necessary contracts are deployed to support its operations. As the final step in the boot process, the activateroa function is invoked. This function inserts a row into the reslimit table for each system account, assigns the network’s maximum RAM bytes to sysio.roa’s policy, and sets the cost in SYS for every byte of RAM stored in the ROA_STATE table. As a designated system account, `sysio.roa` is endowed with infinite CPU and NET resources, as well as unrestricted access to all available RAM, ensuring seamless and efficient management of system resources.
