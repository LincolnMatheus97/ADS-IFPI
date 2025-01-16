# == DO NOT EDIT THE FOLLOWING LINES for the Raspberry Pi Pico VS Code Extension to work ==
if(WIN32)
    set(USERHOME $ENV{USERPROFILE})
else()
    set(USERHOME $ENV{HOME})
endif()
set(sdkVersion 2.1.0)
set(toolchainVersion 13_3_Rel1)
set(picotoolVersion 2.1.0)
set(picoVscode ${USERHOME}/.pico-sdk/cmake/pico-vscode.cmake)
if (EXISTS ${picoVscode})
    include(${picoVscode})
endif()
# ====================================================================================
# Generated Cmake Pico project file

cmake_minimum_required(VERSION 3.13)

set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# Initialise pico_sdk from installed location
if(WIN32)
    set(USERHOME $ENV{USERPROFILE})
else()
    set(USERHOME $ENV{HOME})
endif()
set(sdkVersion 2.1.0)
set(toolchainVersion 13_3_Rel1)
set(picotoolVersion 2.1.0)
set(picoVscode ${USERHOME}/.pico-sdk/cmake/pico-vscode.cmake)
if (EXISTS ${picoVscode})
    include(${picoVscode})
endif()

set(PICO_BOARD pico_w CACHE STRING "Board type")

# Pull in Raspberry Pi Pico SDK
include(pico_sdk_import.cmake)

project(displayOLED C CXX ASM)

# Initialise the Raspberry Pi Pico SDK
pico_sdk_init()

# Add executable. Default name is the project name, version 0.1
add_executable(displayOLED displayOLED.c)

pico_set_program_name(displayOLED "displayOLED")
pico_set_program_version(displayOLED "0.1")

# Modify the below lines to enable/disable output over UART/USB
pico_enable_stdio_uart(displayOLED 0)
pico_enable_stdio_usb(displayOLED 1)

# Add the standard library to the build
target_link_libraries(displayOLED pico_stdlib)

# Include the directory for ssd1306
target_include_directories(displayOLED PRIVATE
    ${CMAKE_CURRENT_LIST_DIR}/lib/ssd1306
)

# Add the source files for ssd1306
target_sources(displayOLED PRIVATE
    lib/ssd1306/ssd1306_i2c.c
)

# Link additional libraries (like hardware_i2c for I2C communication)
target_link_libraries(displayOLED hardware_i2c)

# Add extra outputs (UF2, ELF, etc.)
pico_add_extra_outputs(displayOLED)
